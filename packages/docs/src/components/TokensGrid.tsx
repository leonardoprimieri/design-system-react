import React from 'react'
import '../styles/tokens-grid.css'

type TokenGridProps = {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokenGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>Name</tr>
        <tr>Value</tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={value}>
            <td>{name}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
