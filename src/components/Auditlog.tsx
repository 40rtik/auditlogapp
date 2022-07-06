import React, { FC } from 'react'
import { useState } from "react";

const Auditlog: FC = () => {
    const API = 'http://localhost:8083/auditlog';

    type AuditlogT = [{
        date: string,
        labels: [string]
    }];

    const [auditlogData, setAuditlogs] = useState<AuditlogT | []>([]);

    const fetchAuditlogs = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setAuditlogs(data);
        }
        catch (error) {
            console.log("ERROR ", error);
        }
    };

    return (
        <div>
            <button onClick={() => fetchAuditlogs()}>show history</button>
            <ul>
                {auditlogData.map((item, i) =>
                    <li key={item.date}>Date: {item.date} - labels: {item.labels.join(', ')}</li>
                )}
            </ul>
        </div>
    );
}

export default Auditlog;