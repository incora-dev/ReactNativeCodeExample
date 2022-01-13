function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  opacity = 0.2,
  radius = 8,
  elevation = 3,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation,
  };
}

export default {
  boxShadow,
};
