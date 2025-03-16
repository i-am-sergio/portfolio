import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/i-am-sergio" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sergio-mogollon/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/channel/sergio-dev" },
  { icon: <FaTwitter />, path: "https://twitter.com/sergio_dev_" },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@sergio_dev" }
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;