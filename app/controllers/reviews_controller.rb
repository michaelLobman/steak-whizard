class ReviewsController < ApplicationController

    def create
        review = @current_user.reviews.create!(review_params)
        steak = Steak.find(params[:steak_id])
        steak.update(rating: steak.calc_avg_rating)
        render json: @current_user, status: :created
    end


    private

    def review_params
        params.permit(:steak_id, :title, :comment, :rating, :toppings)
    end
end
