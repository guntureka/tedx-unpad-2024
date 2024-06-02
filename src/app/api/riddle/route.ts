import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Define the shape of the request body
interface RiddleSubmissionDetails {
    userId: string;
    url: string;
}

const POST = async (req: Request): Promise<Response> => {
    try {
        const role = await currentRole();

        if (role !== "USER") {
            return new NextResponse(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
        }

        const riddleSubmissionDetails: RiddleSubmissionDetails = await req.json();

        // Validate the request body
        if (!riddleSubmissionDetails.url) {
            return new NextResponse(JSON.stringify({ error: 'URL is required' }), { status: 400 });
        }
        
        if (!riddleSubmissionDetails.userId) {
            return new NextResponse(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
        }

        // Save to the database
        await db.riddleSubmission.create({
            data: {
                userId: riddleSubmissionDetails.userId,
                url: riddleSubmissionDetails.url,
            },
        });

        return new NextResponse(JSON.stringify({ message: 'Post created successfully' }), { status: 201 });
    } catch (error: any) {
        console.error('Error creating post:', error);
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
};

const GET = async (req: Request): Promise<Response> => {
    try {
      const role = await currentRole();

      if (role === "ADMIN") {
        const riddleSubmissions = await db.riddleSubmission.findMany();
        return new NextResponse(JSON.stringify({ riddleSubmissions }), { status: 200 });
      }
  
      if (role !== "USER") {
        return new NextResponse(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
      }
  
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get('userId');
  
      if (!userId) {
        return new NextResponse(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
      }
  
      // Check whether the user has already submitted the riddle
      const riddleSubmission = await db.riddleSubmission.findFirst({
        where: { userId },
      });
  
      return new NextResponse(JSON.stringify({ riddleSubmission }), { status: 200 });
    } catch (error: any) {
      console.error('Error fetching submission:', error);
      return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
  };
  
  export { POST, GET };
  