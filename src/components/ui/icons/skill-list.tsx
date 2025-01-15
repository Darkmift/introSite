import React from 'react';
import { DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiGit,
  SiNestjs,
  SiOracle,
  SiJest,
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import IconCard from './card';

const icons = [
  { Icon: SiGit, id: 'git' },
  { Icon: SiNestjs, id: 'nestjs' },
  { Icon: DiJavascript1, id: 'javascript' },
  { Icon: SiNextdotjs, id: 'nextjs' },
  { Icon: FaVuejs, id: 'vuejs' },
  { Icon: DiReact, id: 'react' },
  { Icon: DiNodejs, id: 'nodejs' },
  { Icon: SiMongodb, id: 'mongodb' },
  { Icon: SiPostgresql, id: 'postgresql' },
  { Icon: SiOracle, id: 'oracle' },
  { Icon: SiJest, id: 'jest' },
  { Icon: TbBrandCSharp, id: 'csharp' },
];

const Professional = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center">
        {icons.map(({ Icon, id }) => (
          <div key={id}>
            <IconCard icon={<Icon />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professional;
