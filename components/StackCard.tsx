interface StackCardProps {
  tech: string;
}

export const StackCard = ({ tech }: StackCardProps) => {
  return (
    <div className="dark:text-background text-mainText font-bold font-Inter text-center dark:bg-green-500 bg-background flex items-center justify-center p-2 rounded-xl">
      {tech}
    </div>
  );
};
