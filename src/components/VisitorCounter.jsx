import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Using a unique namespace for your portfolio
        // This will count hits to your site
        const fetchCount = async () => {
            try {
                // Using counterapi.dev which is free and simple
                // First try to hit the up endpoint to increment
                const namespace = 'anjiladhikari-portfolio';
                const key = 'visits';

                const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
                const data = await response.json();

                if (data && data.count) {
                    setCount(data.count);
                }
            } catch (error) {
                console.error("Error fetching visitor count:", error);
                // Fallback or silent fail
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    if (loading) return null;

    return (
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
            <Eye size={14} />
            <span>{count ? `${count.toLocaleString()} Views` : 'Views'}</span>
        </div>
    );
};

export default VisitorCounter;
