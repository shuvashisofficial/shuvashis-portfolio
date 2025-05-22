import { 
  Code, FileCode, Braces, FileJson, Type, Coffee, Database, Terminal,
  Globe, Layout, Server, PanelLeft, Palette, Tablet,
  BadgePlus, BarChart, Brain, LineChart, Sigma,
  Coins, Boxes, Link, LockKeyhole, Wallet, FolderArchive,
  Cloud, CloudCog, Container, GitBranch, Layers, CircleDashed, UploadCloud,
  Cpu, Network, Bot, Share2, Settings, Zap, ShieldCheck,
  Eye, Camera, BrainCog,
  LucideIcon, LucideProps 
} from "lucide-react";

interface SkillIconProps extends LucideProps {
  name: string;              // Key to look up in iconMap
  logoKey?: string;          // Optional image path (PNG, JPG, SVG)
}

export function SkillIcon({ name, logoKey, ...props }: SkillIconProps) {
  const iconMap: Record<string, LucideIcon> = {
    // Languages
    'code': Code,
    'file-code': FileCode,
    'braces': Braces,
    'file-json': FileJson,
    'type': Type,
    'coffee': Coffee,
    'database': Database,
    'terminal': Terminal,

    // Web
    'globe': Globe,
    'layout': Layout,
    'server': Server,
    'panel-left': PanelLeft,
    'palette': Palette,
    'tablet': Tablet,

    // ML/Data
    'badge-plus': BadgePlus,
    'bar-chart': BarChart,
    'brain': Brain,
    'brain-cog': BrainCog,
    'line-chart': LineChart,
    'sigma': Sigma,

    // Blockchain
    'coins': Coins,
    'boxes': Boxes,
    'link': Link,
    'lock-keyhole': LockKeyhole,
    'wallet': Wallet,
    'folder-archive': FolderArchive,

    // Cloud/DevOps
    'cloud': Cloud,
    'cloud-cog': CloudCog,
    'container': Container,
    'git-branch': GitBranch,
    'layers': Layers,
    'circle-dashed': CircleDashed,
    'upload-cloud': UploadCloud,

    // Concepts
    'cpu': Cpu,
    'network': Network,
    'bot': Bot,
    'share-2': Share2,
    'settings': Settings,
    'zap': Zap,
    'shield-check': ShieldCheck,

    // Vision
    'eye': Eye,
    'camera': Camera,
  };

  // Handle PNG, JPG, SVG images if logoKey is provided and is an image path
  if (logoKey && /\.(png|jpe?g|svg)$/i.test(logoKey)) {
    return <img src={logoKey} alt={name} className="h-5 w-5" />;
  }

  // Fallback to mapped Lucide icon or Code icon
  const IconComponent = iconMap[name] || Code;
  return <IconComponent {...props} />;
}
