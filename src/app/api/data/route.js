import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

export async function GET() {
  const dataFile = path.join(process.cwd(), 'data', 'solomon_islands_sports.csv')

  if (!fs.existsSync(dataFile)) {
    return NextResponse.json({ error: 'Data file not found' }, { status: 404 })
  }

  const csvContent = fs.readFileSync(dataFile, 'utf-8')
  const result = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true
  })

  return NextResponse.json(result.data)
}
