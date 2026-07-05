# Solomon Islands Sports Dashboard

A simple dashboard that tracks Solomon Islands sports performance against world standards across football, athletics, rugby, basketball, and Olympic participation.

---

## What This Does

This dashboard shows:
- **Summary cards** with total events, sports covered, and top performers
- **Filters** to view specific sports, years, competitions, or opponents
- **Charts** showing events by year and by sport
- **Detailed results table** with links to original sources

---

## How to Open the Dashboard (Step by Step)

### Step 1: Open the Project Folder
1. Go to your Desktop
2. Find the folder called `sport analyst`
3. Open it

### Step 2: Start the Dashboard
1. Hold the `Shift` key and right-click inside the folder
2. Select "Open PowerShell window here" or "Open in Terminal"
3. Type this command and press Enter:
   ```
   npm run dev
   ```
4. Wait a few seconds until you see "Ready in 3s"

### Step 3: View in Browser
1. Open your web browser (Chrome, Edge, Firefox)
2. Type this in the address bar: `http://localhost:3000`
3. Press Enter
4. You should see the Solomon Islands Sports Dashboard

### Step 4: Stop the Dashboard
When you're done:
1. Go back to the PowerShell/Terminal window
2. Press `Ctrl + C`
3. Type `Y` and press Enter

---

## How to Add New Sports Results

### Step 1: Find the Data File
1. Open the `sport analyst` folder on your Desktop
2. Open the `data` folder
3. Open `solomon_islands_sports.csv` with Notepad or Excel

### Step 2: Add a New Row
Each row looks like this (all on one line):
```
football,Solomon Islands,Match,New Zealand,2026-04-15,1-2,World Cup Qualifier,FIFA Ranking,168,https://www.espn.com/soccer/match/_/gameId/123456
```

The columns are:
1. **sport** - football, athletics, rugby, basketball, or olympics
2. **athlete_or_team** - Team name or athlete name
3. **event_or_match** - What happened (Match, 100m, etc.)
4. **opponent_or_country** - Who they played against (leave blank for individual events)
5. **date** - Date in format YYYY-MM-DD (e.g., 2026-04-15)
6. **result** - Score or time (e.g., 2-1, 11.54)
7. **competition** - Name of competition (e.g., World Cup Qualifier)
8. **world_standard_type** - Type of benchmark (FIFA Ranking, Personal Best, etc.)
9. **world_standard_value** - The benchmark value
10. **source_url** - Link to where you found the result

### Step 3: Save and Refresh
1. Save the file
2. Go back to your browser
3. Refresh the page (press F5 or click the refresh button)

---

## How to Verify Your Data

To check if your data is correct:
1. Open PowerShell in the `sport analyst` folder
2. Type this command:
   ```
   node src/lib/validate.js
   ```
3. Press Enter
4. It will tell you if there are any errors

---

## What the Colors Mean

- **Blue** = Solomon Islands team color
- **Green** = Football
- **Blue** = Athletics
- **Purple** = Rugby
- **Orange** = Basketball
- **Red** = Olympics

---

## Common Questions

**Q: Why can't I see the dashboard?**
A: Make sure you ran `npm run dev` and see "Ready" in the terminal. Then go to `http://localhost:3000`

**Q: How do I add a new sport?**
A: Just add rows to the CSV file with the new sport name. The dashboard will automatically show it.

**Q: Can I delete old results?**
A: Yes, just delete the row from the CSV file and save.

**Q: Where does the data come from?**
A: The data comes from ESPN, World Athletics, Sofascore, and Olympedia. Always include the source URL when adding new results.

**Q: How do I make the dashboard full screen?**
A: Click the maximize button in the top-right corner of your browser window.

---

## Files Explained

| File | What It Does |
|------|--------------|
| `data/solomon_islands_sports.csv` | All the sports data (this is what you edit) |
| `src/app/page.js` | The main dashboard page |
| `src/components/SummaryCards.js` | The overview cards at the top |
| `src/components/Filters.js` | The filter dropdowns |
| `src/components/Charts.js` | The charts showing trends |
| `src/components/ResultsTable.js` | The detailed results table |
| `src/lib/validate.js` | Checks if your data is correct |
| `AGENTS.md` | Rules for how the project works |

---

## Getting Help

If something isn't working:
1. Make sure you followed all the steps above
2. Check the terminal for error messages
3. Try stopping and restarting with `npm run dev`
4. Make sure your CSV file is saved correctly

---

## Data Sources

- Football: ESPN (espn.com)
- Athletics: World Athletics (worldathletics.org)
- Rugby: Sofascore (sofascore.com)
- Basketball: Sofascore (sofascore.com)
- Olympics: Olympedia (olympedia.org)

Always include the source URL when adding new results so others can verify the data.
