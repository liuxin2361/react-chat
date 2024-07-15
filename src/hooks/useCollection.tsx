import { collection, DocumentData, onSnapshot, Query, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

interface ElementData {
    id: string;
    documentData: DocumentData;
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<ElementData[]>([]);

    const collectionRef: Query<DocumentData> = query(collection(db, data));

    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const results: ElementData[] = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    documentData: doc.data(),
                });
            });
            setDocuments(results);
        });
    }, []);

    return { documents };
}

export default useCollection;