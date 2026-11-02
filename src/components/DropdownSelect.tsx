import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'

export interface DropdownOption {
  label: string
  value: string | number
}

interface DropdownSelectProps {
  ariaLabel: string
  className?: string
  onChange: (value: string | number) => void
  options: DropdownOption[]
  value: string | number
}

export default function DropdownSelect({
  ariaLabel,
  className = '',
  onChange,
  options,
  value,
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, options.findIndex((option) => option.value === value)),
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const selectedOption = options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const chooseOption = (option: DropdownOption, index: number) => {
    onChange(option.value)
    setActiveIndex(index)
    setOpen(false)
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      if (!open) {
        setOpen(true)
        setActiveIndex(Math.max(0, options.findIndex((option) => option.value === value)))
        return
      }

      const direction = event.key === 'ArrowDown' ? 1 : -1
      setActiveIndex((index) => (index + direction + options.length) % options.length)
    }

    if (event.key === 'Enter' && open && options[activeIndex]) {
      event.preventDefault()
      chooseOption(options[activeIndex], activeIndex)
    }
  }

  if (!selectedOption) return null

  return (
    <div className={`select-dropdown ${className}`.trim()} ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        className="select-dropdown__trigger"
        onClick={() => setOpen((currentlyOpen) => !currentlyOpen)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span>{selectedOption.label}</span>
        <i aria-hidden="true" className={`fa-solid fa-chevron-down${open ? ' is-rotated' : ''}`} />
      </button>
      {open && (
        <div aria-label={ariaLabel} className="select-dropdown__menu" role="listbox">
          {options.map((option, index) => (
            <button
              aria-selected={option.value === value}
              className={`select-dropdown__option${option.value === value ? ' is-selected' : ''}${index === activeIndex ? ' is-active' : ''}`}
              key={option.value}
              onClick={() => chooseOption(option, index)}
              onMouseEnter={() => setActiveIndex(index)}
              role="option"
              type="button"
            >
              <span>{option.label}</span>
              {option.value === value && <i aria-hidden="true" className="fa-solid fa-check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
