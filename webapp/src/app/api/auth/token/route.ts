import { getSession } from '@auth0/nextjs-auth0/edge';

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    return new Response(
      JSON.stringify({ idToken: session?.idToken, accessToken: session?.accessToken }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response('Internal Server', { status: 500 });
  }
}
