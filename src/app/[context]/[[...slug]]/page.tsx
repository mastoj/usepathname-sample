import ClientLink from "./client-link";

export const generateStaticParams = async () => {
  return [];
};

type Props = {
  params: {
    context: string;
    slug: string[];
  };
};

const ContextPage = ({ params }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 *:border *:rounded h-screen">
      <div className="max-w-lg overflow-x-auto">
        ContextPage: <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
      <ClientLink />
    </div>
  );
};

export default ContextPage;
