enum Quality {
  NORMAL = "normal",
  SHINING = "shining",
  GLISTENING = "glistening",
  OPULENT = "opulent",
  RADIANT = "radiant",
  ALPHA = "alpha",
}

export const allQualities: Quality[] = Object.keys(Quality).filter((quality) => isNaN(parseInt(quality))).map((quality) => quality.toLowerCase() as Quality)

export const qualityLabels: Map<Quality, string> = new Map([
  [Quality.NORMAL, "Normal"],
  [Quality.SHINING, "Shining"],
  [Quality.GLISTENING, "Glistening"],
  [Quality.OPULENT, "Opulent"],
  [Quality.RADIANT, "Radiant"],
  [Quality.ALPHA, "Alpha"],
])

export const qualityColors: Map<Quality, string> = new Map([
  [Quality.NORMAL, "bg-quality-normal"],
  [Quality.SHINING, "bg-quality-shining"],
  [Quality.GLISTENING, "bg-quality-glistening"],
  [Quality.OPULENT, "bg-quality-opulent"],
  [Quality.RADIANT, "bg-quality-radiant"],
  [Quality.ALPHA, "bg-quality-alpha"],
])

export const qualityTextColors: Map<Quality, string> = new Map([
  [Quality.NORMAL, "text-quality-normal-text"],
  [Quality.SHINING, "text-quality-shining-text"],
  [Quality.GLISTENING, "text-quality-glistening-text"],
  [Quality.OPULENT, "text-quality-opulent-text"],
  [Quality.RADIANT, "text-quality-radiant-text"],
  [Quality.ALPHA, "text-quality-alpha-text"],
])

export default Quality