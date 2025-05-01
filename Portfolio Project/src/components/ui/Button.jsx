import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const buttonVariants = {
  default: {
    scale: 1
  },
  hover: {
    scale: 1.03
  },
  tap: {
    scale: 0.97
  }
}

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  // Determine style variants
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800'
  }

  // Determine size variants
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  }

  const allClassNames = `
    rounded-md font-medium transition-all duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `

  // If 'to' prop is provided, render a Link
  if (to) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="default"
        whileHover="hover"
        whileTap="tap"
      >
        <Link to={to} className={allClassNames} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  // If 'href' prop is provided, render an anchor tag
  if (href) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="default"
        whileHover="hover"
        whileTap="tap"
      >
        <a 
          href={href} 
          className={allClassNames} 
          target="_blank" 
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </motion.div>
    )
  }

  // Otherwise, render a button
  return (
    <motion.button
      variants={buttonVariants}
      initial="default"
      whileHover={!disabled && "hover"}
      whileTap={!disabled && "tap"}
      className={allClassNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button