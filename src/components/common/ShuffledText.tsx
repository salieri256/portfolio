import { useEffect, useRef, type ReactNode } from 'react';
import ShuffleText from 'shuffle-text';

type Props = {
  children?: ReactNode;
  duration?: number
  emptyCharacter?: string
  sourceRandomCharacter?: string
}

export default function ShuffledText({
  children,
  duration,
  emptyCharacter,
  sourceRandomCharacter
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const shuffleText = new ShuffleText(ref.current!)
    shuffleText.duration = duration ?? shuffleText.duration
    shuffleText.emptyCharacter = emptyCharacter ?? shuffleText.emptyCharacter
    shuffleText.sourceRandomCharacter = sourceRandomCharacter ?? shuffleText.sourceRandomCharacter
    shuffleText.start()

    return () => {
      shuffleText.dispose()
    }
  })

  return (
    <span ref={ref}>
      {children}
    </span>
  )
}
