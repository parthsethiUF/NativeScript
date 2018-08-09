"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("../services/couchbase.service");
var LocalNotifications = require("nativescript-local-notifications");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            // Schedule a single notification
            LocalNotifications.schedule([{
                    id: +id,
                    title: "ConFusion Favorites",
                    body: 'Dish ' + id + ' added successfully'
                }])
                .then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing nofication ' + error); });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .pipe(operators_1.map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMsbUVBQWlFO0FBQ2pFLHFFQUF1RTtBQUd2RTtJQUlJLHlCQUFvQixXQUF3QixFQUNoQyxnQkFBa0M7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUY5QyxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBR3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDbEYsaUNBQWlDO1lBQ2pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QixFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUNQLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtpQkFDN0MsQ0FBQyxDQUFDO2lCQUNFLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFyQyxDQUFxQyxFQUM3QyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQUdDO1FBRkcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzlCLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLGlCQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQXBEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBS3dCLDBCQUFXO1lBQ2Qsb0NBQWdCO09BTHJDLGVBQWUsQ0FxRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XG5cbiAgICBmYXZvcml0ZXM6IEFycmF5PG51bWJlcj47XG4gICAgZG9jSWQ6IHN0cmluZyA9IFwiZmF2b3JpdGVzXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IFtdO1xuICAgICAgICBsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS5jcmVhdGVEb2N1bWVudCh7IFwiZmF2b3JpdGVzXCI6IFtdIH0sIHRoaXMuZG9jSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBkb2MuZmF2b3JpdGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBpZCk7XG4gICAgfVxuXG4gICAgYWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNGYXZvcml0ZShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzLnB1c2goaWQpO1xuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHsgXCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXMgfSk7XG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBhIHNpbmdsZSBub3RpZmljYXRpb25cbiAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgICAgIGlkOiAraWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uRnVzaW9uIEZhdm9yaXRlc1wiLFxuICAgICAgICAgICAgICAgIGJvZHk6ICdEaXNoICcgKyBpZCArICcgYWRkZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBzY2hlZHVsZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2hvd2luZyBub2ZpY2F0aW9uICcgKyBlcnJvcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0RmF2b3JpdGVzKCk6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2hlcygpXG4gICAgICAgICAgICAucGlwZShtYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpKTtcbiAgICB9XG5cbiAgICBkZWxldGVGYXZvcml0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHsgXCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXMgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=