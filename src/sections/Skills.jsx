import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaNode, FaLinux, FaAws, FaPython, FaJava, FaTerminal, FaServer, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiNodedotjs, SiMui, SiAxios, SiFramer, SiJsonwebtokens, SiTypescript, SiRedux, SiPostman, SiShadcnui, SiSocketdotio, SiVercel, SiRedhat, SiCentos, SiC, SiCplusplus, SiPycharm, SiIntellijidea, SiStreamlit, SiGnubash, SiJira } from 'react-icons/si';
import { MdEmail, MdSchedule, MdStorage, MdSecurity } from 'react-icons/md';
import { FcDataEncryption } from "react-icons/fc";
import { VscJson, VscCode } from 'react-icons/vsc';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Skills() {

const categories = [
  {
    title: "Linux Administration",
    skills: [
      { icon: <FaLinux />, name: "Linux", level: 90 },
      { icon: <SiRedhat />, name: "RHEL", level: 85 },
      { icon: <SiCentos />, name: "CentOS", level: 80 },
      { icon: <FaAws />, name: "Amazon Linux", level: 85 },
      { icon: <FaTerminal />, name: "Shell Scripting", level: 75 },
      { icon: <MdSecurity />, name: "Permissions", level: 90 },
      { icon: <MdStorage />, name: "Disk & File Systems", level: 85 },
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      { icon: <FaAws />, name: "AWS", level: 80 },
      { icon: <FaServer />, name: "EC2", level: 85 },
      { icon: <MdStorage />, name: "S3", level: 90 },
      { icon: <MdStorage />, name: "EBS & Snapshots", level: 78 },
      { icon: <MdSecurity />, name: "IAM", level: 80 },
      { icon: <FaDatabase />, name: "RDS", level: 75 },
      { icon: <FaNetworkWired />, name: "VPC", level: 70 },
      { icon: <AiOutlineCloudServer />, name: "Load Balancer", level: 75 },
      { icon: <AiOutlineCloudServer />, name: "Auto Scaling", level: 72 },
      { icon: <AiOutlineCloudServer />, name: "CloudWatch", level: 78 },
      { icon: <AiOutlineCloudServer />, name: "CloudFront", level: 70 },
      { icon: <AiOutlineCloudServer />, name: "Route 53", level: 68 },
      { icon: <AiOutlineCloudServer />, name: "SNS", level: 74 },
      { icon: <AiOutlineCloudServer />, name: "DynamoDB", level: 76 },
      { icon: <AiOutlineCloudServer />, name: "Elastic Beanstalk", level: 66 },
      { icon: <AiOutlineCloudServer />, name: "CloudTrail", level: 64 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { icon: <FaPython />, name: "Python", level: 85 },
      { icon: <SiC />, name: "C", level: 70 },
      { icon: <SiCplusplus />, name: "C++", level: 65 },
      { icon: <FaJava />, name: "Java", level: 60 },
      { icon: <VscCode />, name: "Verilog", level: 75 },
      { icon: <VscCode />, name: "SystemVerilog", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <FaGitAlt />, name: "Git", level: 85 },
      { icon: <FaGithub />, name: "GitHub", level: 90 },
      { icon: <FaGitAlt />, name: "GitLab", level: 72 },
      { icon: <FaGitAlt />, name: "Git Actions", level: 74 },
      { icon: <VscCode />, name: "VS Code", level: 95 },
      { icon: <SiPycharm />, name: "PyCharm", level: 80 },
      { icon: <SiIntellijidea />, name: "IntelliJ", level: 75 },
      { icon: <FaNode />, name: "Docker", level: 66 },
      { icon: <FaNode />, name: "CI/CD", level: 70 },
      { icon: <SiStreamlit />, name: "Streamlit", level: 70 },
      { icon: <SiJira />, name: "Jira", level: 80 },
    ],
  },
  {
    title: "DevOps Foundations",
    skills: [
      { icon: <FaNode />, name: "DevOps", level: 65 },
      { icon: <FaNode />, name: "CI/CD Concepts", level: 68 },
      { icon: <FaServer />, name: "Containers", level: 62 },
      { icon: <FaAws />, name: "CloudFormation", level: 60 },
      { icon: <FaServer />, name: "ECS", level: 58 },
    ],
  },
];

  return(
    <section id="skills"
    className="trend-section w-full flex flex-col items-center justify-center relative font-sans">
      <div className='absolute inset-0 pointer-events-none'>
        
        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse'/>
        <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-20 blur-[120px] animate-pulse delay-500' />
      </div>

      <motion.div 
        className="z-10 flex flex-col items-center justify-center mt-12 mb-16"
        initial={{opacity:0 , y: -30}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 , delay:0.1 }}
      >
        <div className="mb-4 tech-label tech-text-accent flex items-center gap-3">
          <span className="w-8 h-[1px] bg-indigo-400/50"></span>
          03 // Expertise
          <span className="w-8 h-[1px] bg-indigo-400/50"></span>
        </div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase text-center'>
          Technical Arsenal
        </h2>
        <p className='mt-4 text-[var(--text-secondary)] text-base sm:text-lg font-mono tracking-wide border-l-2 border-[var(--accent)] pl-4'>
          [ Systems | Cloud | Code ]
        </p>
      </motion.div>

<div className='w-full max-w-7xl px-4 md:px-8 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
  {categories.map((cat, ci) => (
    <motion.div
      key={cat.title}
      initial={{ opacity: 0, x: ci % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: ci * 0.15, ease: "easeOut" }}
      className='relative trend-card p-6 sm:p-8 overflow-hidden group flex flex-col'
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h3 className='text-lg font-mono mb-8 text-white tracking-widest uppercase flex items-center gap-3'>
        <span className="tech-text-accent">/</span> {cat.title}
      </h3>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-y-6 gap-x-4 justify-items-start text-[var(--text-secondary)] w-full flex-1'>
        {cat.skills.map((s, i) => (
          <motion.div
            key={i}
            className='flex flex-col gap-2 w-full group/skill'
            aria-label={s.name}
            title={s.name}
            initial={{opacity:0 , scale: 0.8}}
            whileInView={{opacity:1 , scale: 1}}
            transition={{duration:0.3 , delay: i * 0.03}}
          >
            <div className="flex items-center gap-3">
              <div className='p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] group-hover/skill:border-[var(--accent)] group-hover/skill:text-[var(--accent-light)] transition-all duration-300 relative overflow-hidden text-xl shrink-0'>
                <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover/skill:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 block group-hover/skill:scale-110 transition-transform duration-300">
                  {s.icon}
                </span>
              </div>
              <p className='text-sm sm:text-base text-zinc-300 font-mono uppercase tracking-wider group-hover/skill:text-[var(--accent-light)] transition-colors duration-300 leading-snug'>
                {s.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>


    </section>
  )
}
