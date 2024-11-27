import { createContext, useContext, useEffect, useState } from "react";
import padrao from '../../assets/Images/SignUp/profile-pic-choosen.jpeg';

const ProfileImageContext = createContext();

export const useProfileImage = () => useContext(ProfileImageContext);

export const ProfileImageProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(() => {
        // Carrega a imagem do localStorage ou valor padrão
        return localStorage.getItem("profileImage") || padrao;
    });

    useEffect(() => {
        // Salva a imagem no estado toda vez que mudar
        localStorage.setItem("profileImage", profileImage);
    }, [profileImage]);

    return (
        <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
            {children}
        </ProfileImageContext.Provider>
    );
}