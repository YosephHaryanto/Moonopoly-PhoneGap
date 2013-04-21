var Buildings = [
      {
        "-name": "Moon Base",
        "-amount": "1",
        "-info": "This is where everything happens!",
        "-inputPower": "0",
        "-monetaryCost": "1000",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "20",
        "-x": "20",
        "-y": "220"
      },
      {
        "-name": "Solar Panel Array",
        "-amount": "10",
        "-info": "Provides electric energy by utilizing sunling",
        "-inputPower": "0",
        "-monetaryCost": "20",
        "-outputPower": "10",
        "-regolithCost": "0",
        "-requiredTurns": "2",
        "-x": "80",
        "-y": "110"
      },
      {
        "-name": "Ice Mine",
        "-amount": "2",
        "-info": "Produces water from ice",
        "-inputPower": "10",
        "-monetaryCost": "20",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "2",
        "-x": "200",
        "-y": "20",
        "outputResources": {
          "resource": {
            "-name": "Water",
            "-amount": "10",
            "-quality": "0.5"
          }
        }
      },
      {
        "-name": "Regolith Processor",
        "-amount": "10",
        "-info": "Processes regolith ",
        "-inputPower": "20",
        "-monetaryCost": "20",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "4",
        "-x": "280",
        "-y": "220",
        "outputResources": {
          "resource": [
            {
              "-name": "Regolith",
              "-amount": "10"
            },
            {
              "-name": "Helium-3",
              "-amount": "10"
            }
          ]
        }
      },
      {
        "-name": "Nuclear Plant",
        "-amount": "1",
        "-info": "Utilizes Helium-3 to provide energy",
        "-inputPower": "0",
        "-monetaryCost": "100",
        "-outputPower": "50",
        "-regolithCost": "0",
        "-requiredTurns": "10",
        "-x": "170",
        "-y": "370",
        "requiredResources": {
          "resource": {
            "-name": "Helium-3",
            "-amount": "50"
          }
        }
      },
      {
        "-name": "Water Processor",
        "-amount": "1",
        "-info": "Processes water to yield oxygen and hydrogen",
        "-inputPower": "10",
        "-monetaryCost": "15",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "4",
        "-x": "385",
        "-y": "70",
        "requiredResources": {
          "resource": {
            "-name": "Water",
            "-amount": "50"
          }
        },
        "outputResources": {
          "resource": [
            {
              "-name": "Oxygen",
              "-amount": "10"
            },
            {
              "-name": "Hydrogen",
              "-amount": "20"
            }
          ]
        }
      },
      {
        "-name": "Smelting Facility",
        "-amount": "1",
        "-info": "Provides metals and minerals",
        "-inputPower": "50",
        "-monetaryCost": "25",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "5",
        "-x": "535",
        "-y": "260",
        "requiredResources": {
          "resource": {
            "-name": "Regolith",
            "-amount": "50"
          }
        },
        "outputResources": {
          "resource": [
            {
              "-name": "Oxygen",
              "-amount": "10"
            },
            {
              "-name": "Metal",
              "-amount": "20"
            },
            {
              "-name": "Minerals",
              "-amount": "30"
            }
          ]
        }
      },
      {
        "-name": "Propellant Factory",
        "-amount": "1",
        "-info": "Produces fuel",
        "-inputPower": "50",
        "-monetaryCost": "30",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "5",
        "-x": "570",
        "-y": "40",
        "requiredResources": {
          "resource": [
            {
              "-name": "Hydrogen",
              "-amount": "50"
            },
            {
              "-name": "Oxygen",
              "-amount": "60"
            }
          ]
        },
        "outputResources": {
          "resource": {
            "-name": "Fuel",
            "-amount": "10"
          }
        }
      },
      {
        "-name": "Electronics Factory",
        "-amount": "2",
        "-info": "Manufactures electronics supply",
        "-inputPower": "20",
        "-monetaryCost": "10",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "3",
        "-x": "670",
        "-y": "160",
        "requiredResources": {
          "resource": {
            "-name": "Metal",
            "-amount": "50"
          }
        },
        "outputResources": {
          "resource": {
            "-name": "Electronics",
            "-amount": "20"
          }
        }
      },
      {
        "-name": "Robot Factory",
        "-amount": "2",
        "-info": "Manufactures robots",
        "-inputPower": "50",
        "-monetaryCost": "15",
        "-outputPower": "0",
        "-regolithCost": "0",
        "-requiredTurns": "6",
        "-x": "570",
        "-y": "380",
        "requiredResources": {
          "resource": [
            {
              "-name": "Metal",
              "-amount": "50"
            },
            {
              "-name": "Electronics",
              "-amount": "50"
            }
          ]
        },
        "outputResources": {
          "resource": {
            "-name": "Robot",
            "-amount": "20"
          }
        }
      }
    ];