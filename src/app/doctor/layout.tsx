'use client'
import React, { Suspense } from "react";

const Layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <Suspense>
            {children}
        </Suspense>
    );
};

export default Layout;