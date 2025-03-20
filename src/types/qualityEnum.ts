enum Quality {
  NORMAL = "normal",
  SHINING = "shining",
  GLISTENING = "glistening",
  OPULENT = "opulent",
  RADIANT = "radiant",
  ALPHA = "alpha",
}

export const qualityLabels: Map<Quality, string> = new Map([
  [Quality.NORMAL, "Normal"],
  [Quality.SHINING, "Shining"],
  [Quality.GLISTENING, "Glistening"],
  [Quality.OPULENT, "Opulent"],
  [Quality.RADIANT, "Radiant"],
  [Quality.ALPHA, "Alpha"],
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