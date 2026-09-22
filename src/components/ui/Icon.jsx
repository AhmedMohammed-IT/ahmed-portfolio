import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  ClipboardList,
  CodeXml,
  Coffee,
  Compass,
  Database,
  Download,
  GraduationCap,
  LifeBuoy,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Terminal,
  Wrench,
} from 'lucide-react'

// Data files reference icons by string key, so content stays plain JavaScript.
const icons = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  book: BookOpen,
  briefcase: Briefcase,
  check: Check,
  clipboard: ClipboardList,
  code: CodeXml,
  coffee: Coffee,
  compass: Compass,
  database: Database,
  download: Download,
  graduation: GraduationCap,
  lifebuoy: LifeBuoy,
  mail: Mail,
  monitor: Monitor,
  phone: Phone,
  pin: MapPin,
  terminal: Terminal,
  wrench: Wrench,
}

export function Icon({ name, size = 18, ...rest }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component size={size} aria-hidden="true" focusable="false" {...rest} />
}
