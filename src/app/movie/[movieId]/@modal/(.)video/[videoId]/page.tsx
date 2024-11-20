import VideoShow from "@/src/components/VideoShow";


type Props = {
  params: { videoId: string };
}

async function MovieVideoPage({ params }: Props) {
  const { videoId } = params;

  return <VideoShow url={`https://youtube.com/watch?v=${videoId}`} />;
}

export default MovieVideoPage;
