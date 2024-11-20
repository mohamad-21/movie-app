import React, { CSSProperties } from "react";

function VotesCircle({ vote }: { vote: number }) {
  let voteColor = "red";

  if (Math.floor(vote) >= 5) {
    voteColor = "yellow"
  }

  if (Math.floor(vote) >= 7) {
    voteColor = "green"
  }

  const styles = {
    "--percent": `${Math.floor(vote * 10)}%`
  } as CSSProperties

  return (
    <div className="flex items-center justify-center w-[40px] h-[40px] bg-background rounded-full vote-average relative" style={styles} data-color={voteColor}>
      <div>
        <span className="relative z-[3] text-xs">{Math.floor(vote * 10)}%</span>
      </div>
    </div>
  )
}

export default VotesCircle;
