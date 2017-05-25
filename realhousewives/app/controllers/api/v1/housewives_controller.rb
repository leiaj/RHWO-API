class Api::V1::HousewivesController < ApplicationController

  def index

    if params[:franchise] == "All"
      @housewives = Housewife.all
    else
      @housewives = Housewife.where(franchise: params[:franchise])
    end
    render json: @housewives, each_serializer: HousewifeIndexSerializer
  end

  def show
    @housewife = Housewife.find(params[:id])
    render json: @housewife, each_serializer: HousewivesSerializer
  end

  def new

  end

  def create
    @housewife = Housewife.create(housewife_params)
    render json: @housewife, each_serializer: HousewivesSerializer
  end

  private

  def housewife_params
    params.require(:housewife).permit(:name, :franchise, :spouse, :net_worth, :plastic_surgery, :age, :photo)
  end
end
