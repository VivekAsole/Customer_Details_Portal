
export const fetchPhotos = async (): Promise<string[]> => {
  try {
    const url_array: string[] = []
    let item_count = 0

    while (item_count < 9) {
      const response = await fetch('https://random.imagecdn.app/v1/image?width=200&height=200&format=json')
      const data = await response.json()
      if (data.url) url_array.push(data.url)
      item_count += 1
    }

    return url_array
  } catch (error) {
    alert("Error while fetching images")
    return []
  }
};
