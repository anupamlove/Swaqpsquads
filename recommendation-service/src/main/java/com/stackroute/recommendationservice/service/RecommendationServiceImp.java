package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.recommendationservice.exception.ProductNotFoundException;
import com.stackroute.recommendationservice.model.Category;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.model.Location;
import com.stackroute.recommendationservice.repository.CategoryRepository;
import com.stackroute.recommendationservice.repository.LocationRepository;
import com.stackroute.recommendationservice.repository.ProductDataRepository;
import com.stackroute.recommendationservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;


@Slf4j

@Service

public class RecommendationServiceImp implements RecommendationService {
    private ProductDataRepository repo;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;
    private LocationRepository locationRepository;

    @Autowired
    public RecommendationServiceImp(ProductDataRepository recommendationRepository, UserRepository userRepository, CategoryRepository categoryRepository, LocationRepository locationRepository) {
        this.repo = recommendationRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.locationRepository = locationRepository;
    }

    @Override
    public void deleteProductNode(int productId) {
        IncomingProductData data = repo.findById(productId).get();
        repo.delete(data);
    }


    @Override
    public void createNode(IncomingProductData incomingData) {

        if (repo.findById(incomingData.getProductId()).isEmpty()) {
            repo.save(incomingData);
        }
        if (categoryRepository.findById(incomingData.getProductCategory()).isEmpty()) {
            Category category1 = new Category(incomingData.getProductCategory());
            categoryRepository.save(category1);
        }
        if (locationRepository.findById(incomingData.getState()).isEmpty()) {
            Location location1 = new Location(incomingData.getState(), incomingData.getCity());
            locationRepository.save(location1);
        }


        repo.createCategoryRelationshipWithProduct(incomingData.getProductId(), incomingData.getProductCategory());
        repo.createLocationRelationshipWithProduct(incomingData.getProductId(), incomingData.getState());
    }

    @Override
    public HashSet<IncomingProductData> getProductRecommendationsByLocation(String state) throws ProductNotFoundException {
        HashSet<IncomingProductData> prod = repo.getProductRecommendationByLocation(state);
        if (prod.isEmpty()) {
            throw new ProductNotFoundException();
        } else {
            return prod;
        }
    }


    @Override
    public HashSet<IncomingProductData> getProductRecommendationByStateAndCategory(String state, String category) throws ProductNotFoundException {
        HashSet<IncomingProductData> produ = repo.getProductRecommendationByStateAndCategory(state, category);
        if (produ.isEmpty()) {
            throw new ProductNotFoundException();
        } else {
            return produ;
        }
    }

    @Override
    public HashSet<IncomingProductData> getProductByCategory(String category) throws ProductNotFoundException {
        HashSet<IncomingProductData> catpo = repo.getProductByCategory(category);
        if (catpo.isEmpty()) {
            throw new ProductNotFoundException();
        } else {
            return catpo;
        }
    }

    @Override
    public ArrayList<IncomingProductData> getAllProduct() {
        return (ArrayList<IncomingProductData>) repo.findAll();
    }


//    @Override
//    public IncomingProductData data1(IncomingProductData user) {
//        return null;
//    }


    public IncomingProductData getById(int i) throws ProductNotFoundException {
        Optional<IncomingProductData> pro = repo.findById(i);
        if (pro.isPresent()) {
            return pro.get();
        } else {
            throw new ProductNotFoundException();
        }
    }

    public IncomingProductData addNew(IncomingProductData data) throws ProductAlreadyExistException {
        Optional<IncomingProductData> movie = repo.findById(data.getProductId());
        if (movie.isPresent()) {
            throw new ProductAlreadyExistException();
        } else {
            return repo.save(data);
        }
    }
}
//    public void createNode(String str,MultipartFile file) throws ProvideProperProductDetails, JsonMappingException, JsonProcessingException {
//        if(str.isEmpty()) {
//            log.error("Provide proper product details");
//            throw new ProvideProperProductDetails();
//        } else {
//            log.debug("Inside the ProductServiceImpl --createNode  methods");
//            ObjectMapper objectMapper = new ObjectMapper();
//            IncomingProductData prod = objectMapper.readValue(str,IncomingProductData.class);
//            prod.setProductId(sequenceGeneratorService.generateSequence(IncomingProductData.SEQUENCE_NAME));
//            try {
//                prod.getProductImage(file.getBytes());
//            } catch (IOException e) {
//                // TODO Auto-generated catch block
//                e.printStackTrace();
//            }
//            repo.save(prod);
//            return prod;
//}

//    @Override
//    public void createImageNode(IncomingProductData Data,MultipartFile file) throws IOException {
//        if (repo.findById(Data.getProductId()).isEmpty()) {
//            repo.save(Data);
//        }
//        if (categoryRepository.findById(Data.getProductCategory()).isEmpty()) {
//            Category category2 = new Category(Data.getProductCategory());
//            categoryRepository.save(category2);
//        }
//        if (locationRepository.findById(Data.getCity()).isEmpty()) {
//            Location location2 = new Location(Data.getCity(), Data.getState());
//            locationRepository.save(location2);
//        }
//        ObjectMapper objectMapper = new ObjectMapper();
//           IncomingProductData update = objectMapper.readValue(Data.getProductImage(),IncomingProductData.class);
//        try {
//                update.setProductImage(file.getBytes());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            repo.save(update);










//    @Override
//
//    public IncomingProductData addproduct(String str, MultipartFile file) throws JsonProcessingException, ProductNotFoundException {
//        if (str.isEmpty()) {
//            log.error("Provide proper product detalies");
//            throw new ProductNotFoundException();
//        } else {
//            ObjectMapper objectMapper = new ObjectMapper();
//            IncomingProductData update = objectMapper.readValue(str, IncomingProductData.class);
//
//
//            try {
//                update.setProductImage(file.getBytes());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            repo.save(update);
//            return update;
//        }
//    }







