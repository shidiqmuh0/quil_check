# quil_check

Here’s a `README.md` in English to document both code files:

```markdown
# Hex File Processor and Checker

This repository contains two scripts designed to handle `.hex` files and JSON data processing. The first script (`kode 1`) extracts hexadecimal strings from files and stores them in a JSON format, while the second script (`kode 2`) compares JSON data to identify common items between two JSON files.

## Requirements
- Node.js installed on your system.
- Basic understanding of file structure and JSON.

## Scripts Overview

### 1. `kode 1`: Hexadecimal Extraction Script
This script reads `.hex` files in a folder, extracts the last 114 characters from each file, and appends `0x` as a prefix. It then saves all processed data into an `output.json` file.

#### Usage
1. Place all your `.hex` files in a folder named `quil`.
2. Run the script:
   ```bash
   node kode1.js
   ```
3. This script will generate an `output.json` file containing the extracted hexadecimal data.

#### Code Explanation
- Reads each `.hex` file from the `quil` directory.
- Extracts the last 114 characters and prefixes them with `0x`.
- Saves the result as an array of strings in `output.json`.

#### Example Output
```json
[
  "0x1234567890abcdef...",
  "0xabcdef1234567890..."
]
```

---

### 2. `kode 2`: JSON Comparison Script
This script compares two JSON files, `input.json` and `quil.json`, and finds items in `input.json` that exist in `quil.json`. The matching items are saved in `hasil.json`.

#### Usage
1. Place `input.json` and `quil.json` in the same directory as the script.
2. Run the script:
   ```bash
   node kode2.js
   ```
3. The script will generate a `hasil.json` file containing only the items found in both `input.json` and `quil.json`.

#### Code Explanation
- Loads `input.json` and `quil.json`.
- Converts `quil.json` data into a `Set` for faster lookups.
- Filters `input.json` data to find items that exist in `quil.json`.
- Saves the filtered results to `hasil.json`.

#### Example Output
```json
[
  "0x1234567890abcdef...",
  "0xabcdef1234567890..."
]
```

---

## File Structure

```
project-folder
│
├── kode1.js          # Hexadecimal extraction script
├── kode2.js          # JSON comparison script
├── quil/             # Folder containing .hex files
│   ├── file1.hex
│   └── file2.hex
├── input.json        # JSON input file for kode 2
└── quil.json         # JSON file containing items to match against
```

## Notes
- Ensure `.hex` files in `quil` contain at least 114 characters.
- Both scripts must be run in the directory with required files (e.g., `input.json` and `quil.json` for `kode 2`).
- The generated JSON files (`output.json` and `hasil.json`) will be saved in the same directory.

## License
This project is open source and available under the MIT License.
```

This README provides a structured overview for users to understand and use both scripts effectively. Let me know if you’d like to add any further details.
