import chai from 'chai'
import GameOfLife from '../src/game-of-life'
import Board from '../src/board-3x3'

chai.expect()

const expect = chai.expect

describe('Game Of Life for 3x3 board', function () {
  it('generates correct first generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()

    let {aliveCoords} = Board.firstGeneration()

    expect(gol.board.aliveCoords).to.deep.equal(aliveCoords)
  })

  it('generates correct second generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()
    gol.nextGeneration()

    let {aliveCoords} = Board.secondGeneration()

    expect(gol.board.aliveCoords).to.deep.equal(aliveCoords)
  })

  it('generates correct third generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()
    gol.nextGeneration()
    gol.nextGeneration()

    let {aliveCoords} = Board.thirdGeneration()

    expect(gol.board.aliveCoords).to.deep.equal(aliveCoords)
  })

})

describe('Game Of Life getting number of live cells for 3x3 board', function () {
  it('has correct number of live cells for first generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()

    let {alive} = Board.firstGeneration()

    expect(gol.alive).to.deep.equal(alive)
  })

  it('has correct number of live cells for second generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()
    gol.nextGeneration()

    let {alive} = Board.secondGeneration()

    expect(gol.alive).to.deep.equal(alive)
  })

  it('has correct number of live cells for third generation', function () {
    let gol = new GameOfLife(Board.board())

    gol.nextGeneration()
    gol.nextGeneration()
    gol.nextGeneration()

    let {alive} = Board.thirdGeneration()

    expect(gol.alive).to.deep.equal(alive)
  })
})
