import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react'

export interface ScoreProps {
  score: number
  size?: number
}

export default function Score({ score, size }: ScoreProps) {
  function turnScoreToStars(score: number) {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push(<IconStarFilled size={size ?? 12} key={i} />)
      } else if (score >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={size ?? 12} key={i} />)
      } else {
        stars.push(<IconStar size={size ?? 12} key={i} />)
      }
    }

    return stars
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {turnScoreToStars(score)}
    </div>
  )
}
