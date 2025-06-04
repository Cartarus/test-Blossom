interface CharacterInfoItemProps {
  title: string
  value: string
}

export const CharacterInfoItem = ({ title, value }: CharacterInfoItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="font-semibold text-base">{title}</div>
      <div className="text-gray-500 text-base">{value}</div>
    </div>
  )
}
