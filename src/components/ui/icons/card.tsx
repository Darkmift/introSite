import React from 'react';

type Props = {
  icon: React.ReactNode;
};

function TechIconCard({ icon }: Props) {
  return (
    <div className="table m-2 px-5 py-7 text-8xl text-center opacity-90 overflow-hidden border-2 border-primary-400 dark:border-primary-purple rounded shadow-tech bg-card text-foreground dark:text-primary-purple transition-all duration-400 align-middle hover:scale-105 hover:border-accent dark:hover:border-accent-purple hover:shadow-purple-600/30">
      {icon}
    </div>
  );
}

export default TechIconCard;