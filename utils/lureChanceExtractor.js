catchBody.children.forEach((tr) => {
  const fishName = tr.getElementsByTagName('th')[0].children[0].innerText

  const chances = tr.getElementsByTagName('td')
  const defaultChance = chances[0].innerText
  const sparklingChance = chances[1].innerText
  const flyChance = chances[2].innerText
  const largeChance = chances[3].innerText
  const magnetChance = chances[4].innerText
  const goldenChance = chances[5].innerText
  
  const data = {
      chances: [
          {
              lure: "bare_hook",
              chance: parseFloat(defaultChance.replace("%", " ")),
          },
          {
              lure: "sparkling_lure",
              chance: parseFloat(sparklingChance.replace("%", " ")),
          },
          {
              lure: "fly_hook",
              chance: parseFloat(flyChance.replace("%", " ")),
          },
          {
              lure: "large_hook",
              chance: parseFloat(largeChance.replace("%", " ")),
          },
          {
              lure: "magnet_lure",
              chance: parseFloat(magnetChance.replace("%", " ")),
          },
          {
              lure: "golden_hook",
              chance: parseFloat(goldenChance.replace("%", " ")),
          },
      ]
  }

  fishFinalData[fishName] = data
})