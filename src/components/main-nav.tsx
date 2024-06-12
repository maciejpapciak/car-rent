import { navigationItems } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {navigationItems.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
