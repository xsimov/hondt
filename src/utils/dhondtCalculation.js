const dhondtCalculation = (parties, totalSeats, cutOutPercentage = 0) => {
  const newParties = parties.map(p => ({ ...p, seats: 0 }))

  const totalVotesAllParties = newParties.map(p => ({
    total: Object.keys(p.votes).reduce((accum, key) => accum + p.votes[key], 0),
    id: p.id,
  }))

  const absolutNumberOfVotes = totalVotesAllParties.reduce(
    (accum, p) => accum + p.total,
    0
  )

  const totalVotes = totalVotesAllParties.filter(p => {
    console.log(
      p.total,
      cutOutPercentage,
      absolutNumberOfVotes * (cutOutPercentage / 100)
    )
    return p.total > absolutNumberOfVotes * (cutOutPercentage / 100)
  })

  let hondtList = []
  for (let seat = 1; seat <= totalSeats; seat++) {
    const thisSeatVotes = totalVotes.map(votes => ({
      hondtNumber: Math.round(votes.total / seat),
      partyId: votes.id,
    }))

    hondtList = [...hondtList, ...thisSeatVotes]
  }

  hondtList
    .sort((a, b) => b.hondtNumber - a.hondtNumber)
    .slice(0, totalSeats)
    .forEach(
      hondtElement =>
        (newParties.find(p => p.id === hondtElement.partyId).seats += 1)
    )

  return newParties
}

export { dhondtCalculation }
