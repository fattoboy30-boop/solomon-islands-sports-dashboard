# Solomon Islands Sports Dashboard

## Project goal
Build a dashboard that shows Solomon Islands sports performance against world standard across multiple sports.

## Scope
Include:
- Football
- Athletics
- Rugby
- Basketball
- Olympic participation

## Data model
Use these fields:
- sport
- athlete_or_team
- event_or_match
- opponent_or_country
- date
- result
- competition
- world_standard_type
- world_standard_value
- source_url

## Data rules
- Prefer official or widely used sports data sources.
- Keep source URLs in the dataset.
- Do not invent results.
- Normalize dates to YYYY-MM-DD.
- Keep one row per match, race, or event.

## UI requirements
- Overview cards.
- Filters by sport, year, opponent, and competition.
- Trend charts.
- Result tables.
- World-standard comparison sections.

## Code style
- Keep components small and reusable.
- Separate data loading, transformation, and UI.
- Use clear filenames and simple folder structure.

## Working rules
- Start with a plan before coding.
- Build in small steps.
- Ask before changing the data model.
- Prefer maintainable code over clever code.
