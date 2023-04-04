import { useGetAllPostQuery } from "@/slices/apiSlices/apiSlice1";
import PostItem from "./postItem";
interface PostFeed {
  myPost?: boolean;
  userId?: string;
}
const PostFeed: React.FC<PostFeed> = ({ myPost, userId }) => {
  let url = myPost ? `api/post?userId=${userId}` : "api/post";
  const { data: posts } = useGetAllPostQuery({ url });

  return (
    <div>
      {posts?.map((post: Record<string, any>, index: number) => (
        <div key={index}>
          <PostItem data={post} />
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
