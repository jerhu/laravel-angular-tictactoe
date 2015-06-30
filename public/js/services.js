/*global angular, event, navigator, console */
/*jslint bitwise: true */
(function () {
	'use strict';
	// todo: draw
	angular.module('morpionApp').factory('morpion', ['$localStorage', function ($localStorage) {
		return {
			// create: player 1, player 2
			current_turn: 0,
			current_state: [0, 0],
			current_display: new Array(9),
			players: ['', ''],
			winner: null,
			draw: null,
			storage: $localStorage,
			setPlayers: function (nicknames) {
				var default_nicknames = ['Guest', 'Gort'];
				this.storage.players = [];
				if (angular.isArray(nicknames) && nicknames.length == 2) {
					for (var i = 0; i < nicknames.length; i++) {
						if (typeof(nicknames[i]) === 'string') {
							this.storage.players[i] = nicknames[i];
						} else {
							this.storage.players[i] = default_nicknames[i];
						}
					}
				}
			},
			tick: function (row) {
				if (this.winner !== null) {
					return;
				}
				this.current_state[this.current_turn] |= 1 << row;
				this.current_display[row] = this.current_turn ? 'x' : 'o';
				this.current_turn = (this.current_turn + 1) % 2;

				this.checkState();
			},
			checkState: function () {
				// win masks
				var win_masks = [448, 56, 7, 273, 84, 292, 146, 73],
					empty_cells = this.current_display.length - this.current_display.filter(String).length,
					i,
					il,
					mask,
					j,
					jl;
				for (i = 0, il = win_masks.length, mask; i < il; i += 1) {
					mask = win_masks[i];
					for (j = 0, jl = this.current_state.length; j < jl; j += 1) {
						if ((this.current_state[j] & mask) === mask) {
							this.winner = j;
							this.saveGame();
							break;
						}
					}
				}
				if (empty_cells === 0 && this.winner === null) {
					this.draw = true;
				}
			},
			saveGame: function () {
				console.info('saveGame');
				// TODO send result
				/*
				var game = {userId: 123},
					r = $resource('phones/d.json', {}, {
						query: {method: 'GET', params: {game: 'game'}, isArray: true}
					});
				r.get(game, function (user) {
					user.abc = true;
					console.log('get');
				});
				*/
			}
		};
	}]);
}());
