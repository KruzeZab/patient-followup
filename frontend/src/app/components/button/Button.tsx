import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

const Button = (props: ButtonProps) => {
  const { href, children, className, ...rest } = props;

  if (href) {
    return (
      <Link
        href={href}
        className={classNames(
          'cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-none dark:focus:ring-blue-800 flex items-center gap-1',
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(
        'cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-0 dark:focus:ring-blue-800 flex items-center gap-1',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
