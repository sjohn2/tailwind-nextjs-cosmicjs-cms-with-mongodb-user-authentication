export default function PostBody({ content }) {
  return (
    <div className=" mx-auto">
      <div className="" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
