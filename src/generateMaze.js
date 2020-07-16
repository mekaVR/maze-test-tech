import { Amazer, AmazerBuilder, RandomizedPrim, Emmure } from "amazer"


export default function generateMaze({width, height}) {
  const config = new AmazerBuilder()
    .withSize({width, height})
    .andModifier(Emmure)
    .using(RandomizedPrim)
    .build()

  return new Amazer(config).generate()
}
