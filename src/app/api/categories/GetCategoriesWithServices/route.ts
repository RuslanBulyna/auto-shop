'use server'

import { NextRequest, NextResponse } from "next/server";
import { logInfo, logError } from "@/utils/Logger";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse,
// ) {
//     logInfo("SSR: API call to /api/GetCategories");
//
//     try {
//         const baseUrl = process.env.API_URL;
//
//         const response = await axios.get(`${baseUrl}/api/v1/categories/with-services`);
//
//         res.status(200).json(response.data);
//         logInfo("SSR: Successfully returned categories from /api/getCategories");
//     } catch (error) {
//         logError("SSR: Error in /api/getCategories API route", error);
//         res
//             .status(500)
//             .json({ error: "SSR: An error occurred while fetching categories." });
//     }
// }

async function handler(req: NextRequest, resp: NextResponse) {
    logInfo("SSR: API call to /api/GetCategories");

    try {
        const baseUrl = process.env.API_URL;

        const response = await fetch(`${baseUrl}/api/v1/categories/with-services`, {
            method: 'GET',
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        return NextResponse.json(data);
        logInfo("SSR: Successfully returned categories from /api/getCategories");
    } catch (error) {
        logError("SSR: Error in /api/getCategories API route", error);
        return NextResponse
            .json({ error: "SSR: An error occurred while fetching categories." });
    }

}

export { handler as GET };