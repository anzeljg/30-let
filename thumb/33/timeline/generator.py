import csv
import json
 
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = {
        'title': {
            'text': {
                'headline': 'Priznanja in sporazumi',
                'text': 'Priznanja Republike Slovenije s strani drugih držav in sporazumi o navezavi diplomatskih stikov.'
            }
        },
        'events': []
    }
    events = []
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
             
            item = {
                'media': {
                    'url': './thumb/33/timeline/flags/' + rows['iso'] + '.png',
                    'caption': '',
                    'credit': 'spletni vir: GoSquared'
                },
                'start_date': {
                    'month': rows['month'],
                    'day': rows['day'],
                    'year': rows['year']
                },
                'text': {
                    'headline': rows['headline'],
                    'text': '<p>' + rows['text'] + '</p>'
                },
                'group': rows['group']
            }
            events.append(item)
        data['events'] = events
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = r'trak.csv'
jsonFilePath = r'trak.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)
