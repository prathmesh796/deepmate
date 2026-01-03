import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  await prisma.game.create({
    data: {
      result: body.result,
      pgn: body.pgn,
      fen: body.fen,
      modelVersion: body.modelVersion,
      status: body.status,
    },
  });

  return Response.json({ ok: true });
}
