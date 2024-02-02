interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className=''>
      <h2 className="text-center">{title}</h2>
    </div>
  );
};

export default SectionTitle;