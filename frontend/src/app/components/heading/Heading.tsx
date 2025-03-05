interface HeadingProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Heading = (props: HeadingProps) => {
  const { title, description, icon } = props;

  return (
    <div className="flex gap-2">
      {icon}
      <div>
        <h3 className="font-semibold text-2xl text-gray-800 mb-1">
          {title}
        </h3>
        <p className="tracking-wide text-gray-600 max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
