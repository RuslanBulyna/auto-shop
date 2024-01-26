import { NextApiRequest, NextApiResponse } from "next";
import axios from "../axiosConfig";
import { logInfo, logError } from "@/utils/Logger";
import {NextRequest, NextResponse} from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { id } = req.query;
//
//   logInfo(`SSR: API call to /api/GetService/${id}`);
//
//   try {
//     const baseUrl = process.env.API_URL;
//
//     const response = await axios.get(`${baseUrl}/api/v1/services/${id}`);
//
//     res.status(200).json(response.data);
//     logInfo(
//       `SSR: Successfully returned service with ID ${id} from /api/GetService`,
//     );
//   } catch (error) {
//     logError(`SSR: Error in /api/GetService/${id} API route`, error);
//     res.status(500).json({
//       error: `SSR: An error occurred while fetching the service with ID ${id}.`,
//     });
//   }
// }

async function handler(request, { params }) {
    const id = params.id;
    logInfo(`SSR: API call to /api/GetService/${id}`);

    try {
        const baseUrl = process.env.API_URL;

        const response = await fetch(`${baseUrl}/api/v1/services/${id}`, {
            method: 'GET',
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        return NextResponse.json(data);
        logInfo(
            `SSR: Successfully returned service with ID ${id} from /api/GetService`,
        );
    } catch (error) {
        logError(`SSR: Error in /api/GetService/${id} API route`, error);
        return NextResponse
            .json({ error: `SSR: An error occurred while fetching the service with ID ${id}.` });
    }

}

export { handler as GET };