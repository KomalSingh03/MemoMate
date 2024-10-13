import React, { useState } from 'react';

const StatusInput = () => {
    const [status, setStatus] = useState('not started'); // default status

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <select
                className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
                value={status}
                onChange={handleStatusChange}
            >
                <option value="not started">Not Started</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
};

export default StatusInput;
